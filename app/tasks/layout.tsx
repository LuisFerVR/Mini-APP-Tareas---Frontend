import Logo from "../components/ui/Logo";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
       <div className="lg:min-h-screen container mx-auto mt-10 px-10 lg:px-0">
        <Logo />
            <div className="shadow w-full mx-auto p-10 lg:w-3/5 flex justify-center items-center bg-blue-950 rounded-sm mb-10">
                {children}
            </div>
        </div>
    </>
  );
}
