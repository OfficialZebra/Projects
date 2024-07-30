function Difference() {
  // const containerStyle = {
  //   backgroundColor: '#f0f0f0',
  //   padding: '20px',
  //   borderRadius: '8px',
  // };
  const isDarkMode = true;
  const isLargeScreen = true;

const containerStyle = {
  backgroundColor: isLargeScreen ? '#333' : '#f0f0f0',
  color: isLargeScreen ? '#fff' : '#333',
  padding: '20px',
  borderRadius: '8px',
  fontSize: isLargeScreen ? '#333' : '400px',

};
  return (
    <>
      <h1>Lets style this bish!</h1>
      <div className="my-component">
        <h1>Hello, World!</h1>
        <p>This is a basic styling guide.</p>
      </div>
      <div style={containerStyle}>
        <h1>Inline styling tee hee</h1>
        <p>This is a basic styling guide.</p>
      </div>
    </>
  )
}

export default Difference