export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="px-5 py-5">{children}</div>
    </section>
  );
}
