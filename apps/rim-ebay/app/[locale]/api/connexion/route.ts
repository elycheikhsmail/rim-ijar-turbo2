import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;
 
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email et mot de passe requis" },
        { status: 400 }
      );
    }

    // Utiliser une transaction pour s'assurer que toutes les opérations sont effectuées
    const result = await prisma.$transaction(async (tx:any) => {
      // Rechercher l'utilisateur
      const user = await tx.user.findUnique({
        where: { email },
      });

      if (!user) {
        throw new Error("Email ou mot de passe incorrect");
      }

      // Vérifier le mot de passe avec bcrypt
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new Error("Email ou mot de passe incorrect");
      }
 
      // Marquer les sessions existantes comme expirées
      await tx.userSession.updateMany({
        where: {
          userId: user.id,
          isExpired: false,
        },
        data: {
          isExpired: true,
        },
      });

      const sessionToken = uuidv4(); // Génère un UUID unique
      // Créer un nouveau token
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          sessionToken: sessionToken, // Ajout de l'UUID
        },
        process.env.JWT_SECRET || "secret-key",
        { expiresIn: "1d" }
      );
 

      // Créer une nouvelle session
      const newSession = await tx.userSession.create({
        data: {
          userId: user.id,
          token: token,
          isExpired: false,
          lastAccessed: new Date(),
        },
      });

      
      // Mettre à jour le lastLogin de l'utilisateur
      const updatedUser = await tx.user.update({
        where: { id: user.id },
        data: { lastLogin: new Date() },
      });

     
      // Définir le cookie
      cookies().set({
        name: "jwt",
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 1 jour
      });

      const userid = user.id.toString()

      cookies().set({
        name:"user",
        value:userid
      })

      return {
        user: updatedUser,
        session: newSession,
      };
    });

    // Préparer la réponse
    const { password: _, ...userWithoutPassword } = result.user;

    return NextResponse.json({
      message: "Connexion réussie1",
      user: userWithoutPassword,
      sessionId: result.session.id,
      token: result.session.token // Optionnel, selon vos besoins
    });

  } catch (error: any) {
    console.error("Erreur détaillée:", error);
    return NextResponse.json(
      { 
        error: error.message || "Erreur lors de la connexion",
        details: process.env.NODE_ENV === "development" ? error.toString() : undefined
      },
      { status: error.message?.includes("incorrect") ? 401 : 500 }
    );
  }
} 