import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VIJAY RACHURI - Developer Portfolio',
  description: 'This is a dynamic and visually engaging personal developer portfolio designed to showcase my experience, skills, and projects. With a focus on cutting-edge web technologies such as Next.js, React, and Tailwind CSS, this portfolio highlights a deep understanding of both front-end and back-end development. It incorporates interactive animations, smooth transitions, and responsive design, offering an immersive experience. Explore a collection of projects demonstrating expertise in UI/UX design, full-stack development, Machine Learning , Data Science and much more , alongside professional roles, certifications, and contributions to open-source communities.',
  icons: {
    icon: 'https://tinyurl.com/faviconvjs', // Link to your favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/> */}
        <link rel="icon" href="https://tinyurl.com/faviconvjs" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
