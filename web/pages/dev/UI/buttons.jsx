// import { useEffect, useRef, useState } from 'react';
import Button from "@components/modular/elements/button";
import List from "@components/modular/containers/list";

const UIButtons = () => {
  // console.log('[UIButtons:]', props);
  let mainCls = "_ui-elements";

  //const [active, setActive] = useState(false);

  return (
    <div className={mainCls}>
      <div className="_container">
        <div className="_spacer-50"></div>
        <List>
          <div className="_spacer-50"> button_X Small-16px</div>
          <div className="_flex">
            <Button secondary xs>
              Cancel
            </Button>
            <Button xs> continue </Button>
            <Button xs white> continue </Button>
            <Button disabled xs>
              Submit
            </Button>
          </div>
          <div className="_spacer-50">button_Small-20px</div>
          <div className="_flex">
            <Button secondary sm>
              Cancel
            </Button>
            <Button sm> Continue </Button>
            <Button sm white> Continue </Button>
            <Button disabled sm>
              Submit
            </Button>
          </div>
          <div className="_spacer-50"> button_Medium(default)-24px</div>
          <div className="_flex">
            <Button secondary> Cancel </Button>
            <Button> Continue </Button>
            <Button white> Continue </Button>
            <Button disabled> Submit </Button>
          </div>
          <div className="_spacer-50">button_Large-30px</div>
          <div className="_flex">
            <Button secondary lg>
              Cancel
            </Button>
            <Button lg> Continue </Button>
            <Button lg white> Continue </Button>
            <Button disabled lg>
              Submit
            </Button>
          </div>
          <div className="_spacer-50">button_X Large-40px</div>
          <div className="_flex">
            <Button secondary xl>
              Cancel
            </Button>
            <Button xl> Continue </Button>
            <Button xl white> Continue </Button>
            <Button disabled xl>
              Submit
            </Button>
          </div>
        </List>
      </div>
      <div className="_spacer-50"></div>
    </div>
  );
};

export default UIButtons;
