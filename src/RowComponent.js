
export const Row = ({ RowKey }) => {
    return (
      <tr>
        {
          RowKey.map((num, i) =>
            <Cell key={i} number={num} />
          )
        }
      </tr>
    )
  }
  
  const Cell = ({ number }) => {
    let CellClass = "cell";
    let CellText = (number) ? `${number}` : " ";
    if (number) {
      CellClass += ` color-${number}`;
    }
  
    return (
      <>
        <td>
          <div className={CellClass}>
            <div className="number">{CellText}</div>
          </div>
        </td>
  
      </>
    )
  }