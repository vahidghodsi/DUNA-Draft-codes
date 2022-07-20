// import { useEffect, useRef, useState } from 'react';
import Input from "@components/modular/inputs/input";
import List from "@components/modular/containers/list";

const UIInputs = () => {
  // console.log('[UIInputs:]', props);
  //const [active, setActive] = useState(false);
  let mainCls = "_ui-elements";

  return (
    <div className={mainCls}>
      <div className="_container" style={{ maxWidth: "600px" }}>
        <div className="_spacer-50"></div>
        <List title={"Input_X Small-16px"}>
          <Input xs disabled />
          <Input xs placeholder="placeholder entered" />
          <Input xs name="XS input" label="XS input"/>
          <Input xs name="XS Input - with warning" label="XS input" message="Warning Content" />
        </List>
        <List title={"Input_Small-20px"}>
          <Input sm disabled />
          <Input sm placeholder="placeholder entered" />
          <Input sm name="SM input" label="SM input" />
          <Input sm name="SM Input - with warning" label="SM input" message="Warning Content" />
        </List>
        <List title={"Input_Medium(default)-24px"}>
          <Input disabled />
          <Input placeholder="placeholder entered" />
          <Input name="MD input" label="MD input" />
          <Input name="MD Input - with warning" label="MD input" message="Warning Content" />
          <Input
            name="M Input - with more than one messages"
            label="MD input"
            message={[
              { content: "info Content", info_type: "info" },
              { content: "Warning Content", info_type: "warning" },
              { content: "Error Content", info_type: "error" },
            ]}
          />
        </List>
        <List title={"Input_Large-30px"}>
          <Input lg disabled />
          <Input lg placeholder="placeholder entered" />
          <Input lg name="LG input" label="LG input" />
          <Input lg name="LG Input - with warning" label="LG input" message="Warning Content" />
        </List>
        <List title={"Input_X Large-40px"}>
          <Input xl disabled />
          <Input xl placeholder="placeholder entered" />
          <Input xl name="XL input" label="XL input" />
          <Input xl name="XL Input - with warning" label="XL input" message="Warning Content" />
        </List>
      </div>
      <div className="_spacer-50"></div>
    </div>
  );
};

export default UIInputs;
