import List from "@components/modular/containers/list";
import Title from "@components/modular/elements/title";

export default function UI() {
  return (
    <div className="_container">
      <div className="_spacer-50"></div>
      <List title="UI Elements">
        <Title xl link="/dev/UI/titles">
          TITLES
        </Title>
        <Title xl link="/dev/UI/buttons">
          BUTTONS
        </Title>
        <Title xl link="/dev/UI/inputs">
          INPUTS
        </Title>
        <Title xl link="/dev/UI/forms">
          FORMS
        </Title>
        <Title xl link="/dev/UI/bars">
          BARS
        </Title>
      </List>
    </div>
  );
}
