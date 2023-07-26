import MainTemplate from "../../components/main/MainTemplate";

export default function Home() {
  return (
    <>
      <MainTemplate
        title="Project"
        elements={["Post", "Project", "Organization"]}
      />
    </>
  );
}
