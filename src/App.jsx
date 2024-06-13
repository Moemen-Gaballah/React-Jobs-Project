const App = () => {
    const name = 'moemen';
    const names = ["moemen", "eslam", "ahmed", "mohsen"];
    const loggedIn = true;

    return (
        <>
            <div className='text-5xl'>App</div>
            <p>Hello {name}</p>
            <ul>
                {
                    names.map((name, index)=>(
                    <li key={index}>{name}</li>
                    ))
                }
            </ul>
            {loggedIn && <h1>Hello Member</h1>}
        </>
    );
};
export default App;