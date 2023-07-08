import MainTemplate from "../../components/main/MainTemplate";

export default function Home() {
  return (
    <>
      <MainTemplate
        title="Organization"
        elements={["Post", "Project", "Organization"]}
      />
    </>
  );
}
