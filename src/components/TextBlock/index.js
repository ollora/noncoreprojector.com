import React from "react";
import CustomLink from "../CustomLink/index.js";
import _ from "lodash";

import styles from "./TextBlock.module.css";

const specialChars = "+-&|!(){}[]^,~*?:".split("");

const SpecialChar = props => (
  <span className={styles.fillerChar} aria-hidden="true">
    {props.char}
  </span>
);

function TextBlock(props) {
  const { width, height, pageData } = props;
  const chosenChar =
    specialChars[parseInt(Math.random() * specialChars.length)];

  const getCharRow = len => {
    const cols = [];
    for (let col = 0; col < len; col++) {
      cols.push(<SpecialChar char={chosenChar} />);
    }
    return cols;
  };

  const randomRows = _.shuffle(Array.from(Array(height).keys()));
  const rows = [];

  for (let row = 0; row < height; row++) {
    const cols = getCharRow(width);
    rows.push(<span>{cols}</span>);
  }

  const setTextInRow = (text, index) => {
    const rowIndex = randomRows[index];
    const colIndex = parseInt(Math.random() * width);

    let leftLen = colIndex;
    let rightLen = width - text.label.length - colIndex;
    if (rightLen < 0) {
      leftLen += rightLen;
      rightLen = 0;
    }

    const left = getCharRow(leftLen);
    const right = getCharRow(rightLen);

    rows[rowIndex] = (
      <div>
        <span>{left}</span>
        {text.isTitle ? (
          <span className={styles.pageTitle}>{text.label}</span>
        ) : (
          <CustomLink {...text.props}>{text.label}</CustomLink>
        )}
        <span>{right}</span>
      </div>
    );
  };

  setTextInRow(
    {
      label: pageData.pageTitle,
      isTitle: true
    },
    0
  );

  pageData.links.forEach((link, i) => {
    setTextInRow(link, i + 1);
  });

  return (
    <div>
      <div className={styles.container}>
        {rows.map((row, i) => (
          <div key={i}>{row}</div>
        ))}
      </div>
    </div>
  );
}

export default TextBlock;
