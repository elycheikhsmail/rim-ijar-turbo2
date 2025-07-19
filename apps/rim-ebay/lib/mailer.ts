import nodemailer from "nodemailer";

// Choisit le transporteur selon l'env
const transporter = nodemailer.createTransport( 
     {
        host: "localhost",
        port: 1025,
        secure: false,
      }
    
);

export async function sendVerificationEmailLocal(to: string, token: string) {
  const url = `${process.env.NEXTAUTH_URL}/verify-email?token=${token}`;
  await transporter.sendMail({
    from: '"Ton App" <no-reply@ton-domaine.com>',
    to,
    subject: "Confirme ton email",
    html: `<p>Pour valider ton compte, clique <a href="${url}">ici</a>.</p>`
  });
}
