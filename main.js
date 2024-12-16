function applyStyles(styles, text) 
{
    let styleString = styles.map(style => style.join(": ")).join("; ");
    
    document.write(`<p style="${styleString}">${text}</p>`);
}

let styles = 
[
    ["color", "orange"],
    ["font-size", "50px"],
    ["text-align", "center"],
];

let text = "salamchik";

applyStyles(styles, text);