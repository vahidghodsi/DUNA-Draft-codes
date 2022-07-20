import { css } from "@emotion/react";

const styles = css({
"dl" :{
    display: "grid",
    gridTemplateColumns: "auto minmax(0, 1fr)",
    gridTemplateAreas: "'title desc'",
    "dt" : {
        // gridArea: "title"
    },
    "dd" : {
        // gridArea: "desc"
    }
}
});

export default styles;
