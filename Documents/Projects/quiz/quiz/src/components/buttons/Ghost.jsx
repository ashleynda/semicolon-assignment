
export function Ghost({text, color, fontSize, width, 
    height, border, background,lineHeight, fontWeight, onClick} ) {
    return(
        <div>
            <button className="buttons" style={{color:color, fontSize:fontSize, width:width, 
            height:height, border:border, background:background, lineHeight:lineHeight, fontWeight:fontWeight}} onClick={() => onClick()}>
                {text}
            </button>

        </div>
    )
}