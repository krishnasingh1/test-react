import { useState, useContext, createContext } from "react";



// create Context
const ThemeContext = createContext(null);

export default function Theme() {
    const [theme, setTheme] = useState("light"); // light | dark
    return(
        <ThemeContext.Provider value={theme}>
            <Form>{}</Form>
            <label>
                <input 
                type="checkbox"
                checked ={theme === 'dark'}
                onChange={(e) =>{
                    setTheme(e.target.checked ? 'dark' : 'light')
                }}/>
                use dark mode
            </label>
        </ThemeContext.Provider>
    )
}

function Form({ children }){

    return (
        <Panel title="Welcome" >
            <Button>Sign up</Button>
            <Button>Log in</Button>
            
        </Panel>
    );

}

function Panel({title, children}) {

    const theme = useContext(ThemeContext);
    const className = 'panel-' + theme;

    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )

}

function Button({ children }) {

    const theme = useContext(ThemeContext);
    const className = 'button-' + theme;
    
    return (
        <button className={className}>
            {children}
        </button>
    );
}