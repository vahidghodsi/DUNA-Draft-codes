// import { useEffect, useRef, useState } from 'react';
import Bar from "@components/modular/elements/bar";
import ScrollBar from "@components/modular/elements/scroll-bar";
import List from "@components/modular/containers/list";

const UIBars = () => {
  // console.log('[UIBars:]', props);
  let mainCls = "_ui-elements _relative";

  //const [active, setActive] = useState(false);

  return (
    <div className={mainCls}>
      <aside style={{ position: "absolute", height: "500px", right: "0" }}>
        <div className="_spacer-40"></div>
        <div style={{ display: "flex", height: "100%" }}>
          <ScrollBar fillLevel={40} disabled />
          <ScrollBar fillLevel={40} />
        </div>
      </aside>
      <aside style={{ width: "100%", top: "0" }}>
        <ScrollBar horizontal fillLevel={40} disabled />
        <ScrollBar horizontal fillLevel={40} />
      </aside>
      <div className="_container" style={{ maxWidth: "600px" }}>
        <List title="Bar_X Small-12px">
          <Bar xs disabled />
          <Bar xs fillLevel={60} />
          <Bar xs fillLevel={60} toggled />
          <p>toggleable elements</p>
          <Bar xs fillLevel={60} toggle />
          <div className="_spacer-40"></div>
        </List>
        <List title="Bar_Small-16px">
          <Bar sm fillLevel={20} disabled />
          <Bar sm fillLevel={30} />
          <Bar sm fillLevel={30} toggled />
          <Bar sm fillLevel={30} toggle />
          <div className="_spacer-40"></div>
        </List>
        <List title="Bar_Medium (Default)-20px">
          <Bar fillLevel={40} disabled />
          <Bar fillLevel={40} />
          <Bar fillLevel={40} toggled />
          <Bar fillLevel={56} toggle />
          <div className="_spacer-40"></div>
        </List>
        <List title="Bar_Large-24px">
          <Bar lg fillLevel={70} disabled />
          <Bar lg fillLevel={70} />
          <Bar lg fillLevel={60} toggled />
          <Bar lg fillLevel={60} toggle />
          <div className="_spacer-40"></div>
        </List>
        <List title="Bar_X Large-28px">
          <Bar xl fillLevel={20} disabled />
          <Bar xl fillLevel={50} />
          <div className="_flex" style={{}}>
            <Bar xl fillLevel={20} toggled style={{ width: "200px" }} />
            <Bar xl fillLevel={50} toggle style={{ width: "200px" }} />
          </div>
          <div className="_spacer-40"></div>
        </List>
      </div>
      <div className="_spacer-50"></div>
    </div>
  );
};

export default UIBars;
