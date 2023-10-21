const ListDivisor = ({ text }: { text: string }) => {

    return (
        <div style={divisorContainerStyle}> <h4 style={divisorTextStyle}>{text}</h4> <div style={divisorStyle}></div> </div>
    )

}

const divisorTextStyle = {
    cursor: 'default',
    marginTop: '0.25rem',
    marginBottom: '0.25rem',
}

const divisorContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    gap: '0.5rem',
}

const divisorStyle = {
    flexGrow: 1,
    width: '100%',
    height: '1px',
    backgroundColor: '#838383',
    margin: '10px 0',
}

export default ListDivisor;