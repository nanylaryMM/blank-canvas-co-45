import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="neon-landing">
      <div className="neon-orb neon-orb-one" aria-hidden="true" />
      <div className="neon-orb neon-orb-two" aria-hidden="true" />
      <section className="neon-content">
        <span className="neon-eyebrow">PROJETO ATUALIZADO</span>
        <h1 className="neon-title">
          Funcionou editar um projeto já publicado na Lova.
        </h1>
        <div className="neon-divider" aria-hidden="true" />
      </section>
      <span className="neon-footer">EDIÇÃO • PUBLICAÇÃO • RESULTADO</span>
    </main>
  );
}
