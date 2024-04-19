// import React, { PureComponent } from "react";

// export class Should extends PureComponent {
//   render() {
//     return (
//       <div>
//         {this.props.prop}
//         {console.log("component updates")}
//       </div>
//     );
//   }
// }

// export default Should;
import React from "react";

const Should = ({ prop }) => {
  return (
    <div>
      {prop} {console.log("component updatez")}
    </div>
  );
};

export default React.memo(Should);
