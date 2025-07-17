// middleware.ts
import { createI18nMiddleware } from "next-international/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from 'jose'

const I18nMiddleware = createI18nMiddleware({
  locales: ["ar", "fr"],
  defaultLocale: "ar",
});

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const path = url.pathname;
  // Exclure favicon.ico
  if (path === "/favicon.ico") {
    return NextResponse.next();
  }
  const cookieStore = await cookies();
  const jwtStore = cookieStore.get("jwt");
  console.log("jwtStore", jwtStore?.value);
  // Vérifier si le cookie jwt existe
  if (jwtStore) {
    try {
      // Vérifier la validité du JWT
      if (typeof process.env.JWT_SECRET === "string") {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET)
        const token = jwtStore.value
        const { payload } = await jwtVerify(token, secret)

        console.log("decoded token")
        console.log(payload)
        // Si le JWT est valide, on peut continuer
      } else {
        throw new Error("JWT_SECRET environment variable is not defined");
      }
    } catch (error) {

      console.log(`JWT verification failed: ${error instanceof Error ? error.message : String(error)}`);
      // throw new Error(`JWT verification failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }


  // Vérifier si le chemin commence par /my ou /admin
  if (path.startsWith("/fr/my") || path.startsWith("/fr/admin")) {
    if (!jwtStore || !jwtStore.value) {
      // Rediriger vers la page de connexion
      url.pathname = `/p/users/connexion`;
      return NextResponse.redirect(url);
    }
  }

  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
