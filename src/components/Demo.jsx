import { useState, useEffect } from 'react';

function Demo() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <h1>{data ? data.join(', ') : 'Loading...'}</h1>
    </div>
  );
}

export default Demo;
