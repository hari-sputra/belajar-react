function Introduction({name, nameState}) {
    return (
        <div>
            <p>Nama Saya : {!nameState ? name : nameState}</p>
        </div>
    )
}

export default Introduction;