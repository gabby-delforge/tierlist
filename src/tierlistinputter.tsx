import React from 'react';

type TierlistInputterProps = {
    onClickEnter: (newItem: string) => void;
}

export const TierlistInputter = (props: TierlistInputterProps) => {
    const [currentText, setCurrentText] = React.useState("");

    const handleChange = (event: any) => {
        setCurrentText(event.target.value);
    }

    const onClick = (event: any) => {
        event.preventDefault();
        event.stopPropagation();
        props.onClickEnter(currentText);
        setCurrentText("");
    }

    return (<form>
        <input onChange={handleChange} value={currentText} type='text'></input>
        <button onClick={onClick}>ENTER BITCH</button>
    </form>)
}