
const app = {
    title: 'VIsibility Toggle',
    details: 'Here are some details'
}

const onDetailsButton = () =>{
    if (showingDetails === true){
        showingDetails = false;
    } else{
        showingDetails = true;
    }
    render();
}

const buttonName = () => {
    if (showingDetails){
        return 'Hide details';
    }
    return 'Show detais';
}

const details = () => {
    if (showingDetails){
        return <p>Here are some details</p>;
    }
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={onDetailsButton}>{buttonName()}</button>
            {details()}
        </div>
    );

    ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');
var showingDetails = false;

render()