import React from "react";
import { TierlistInputter } from "./tierlistinputter";

type TierlistProps = {
  name: string;
  items: string[];
};

// Functional component
export const Tierlist = (props: TierlistProps) => {
  const [allItems, setAllItems] = React.useState([...props.items]);

  const addToItems = (newItem: string) => {
    setAllItems([...allItems, newItem]);
    //allItems.push(newItem);
  };

  return (
    <>
      <div>
        {allItems.map((i) => {
          return <div>{i}</div>;
        })}
      </div>
      <TierlistInputter onClickEnter={addToItems} />
    </>
  );
};

// Class-based component
// export class Tierlist {
//     constructor(props) {

//     }

//     render() {
//         console.log(hkjshgkjshkjds)
//         return (<div>
//             {props.items.map((i) => {return <div>{i}</div>})}
//         </div>)
//     }
// }
