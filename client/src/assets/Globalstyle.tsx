import {Global, css} from  "@emotion/react"
  const Globalstyles = () => {
    return (
        <Global  styles = {css`
            body{
                margin: 0;
                padding: 0;
                background-color: #f1f1f1;
            }

        `} />
    );
  };
  export default Globalstyles