export function Filled({text,color,backgroundColor,borderRadius, border, 
    width, height, fontSize, lineHeight, gap, onClick}) {
    return(
        <div>
            <button className="buttons" style={{color: color, backgroundColor: backgroundColor, 
            borderRadius: borderRadius, border:border, width:width, 
            height:height, fontSize:fontSize, lineHeight:lineHeight, gap:gap}} onClick={() => onClick()}>

            {text}

            </button>


        </div>
    )
}