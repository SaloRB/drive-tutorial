export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-neutral-800 p-4 text-white">
      <main className="text-center">{children}</main>
    </div>
  );
}
