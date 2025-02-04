import ScreenSaver from "../../../../components/ScreenSaver";

async function ColoredScreenSaver({ params }) {
  const { color } = await params;
  return (
    <main className="screen-saver-wrapper">
      <ScreenSaver color={color} />
    </main>
  );
}

export default ColoredScreenSaver;
