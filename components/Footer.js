import React from 'react';

export default function Footer({ htmlTag }) {
  return React.createElement(
    htmlTag,
    {
      className:
        'text-5xl font-bold absolute bottom-20 left-0 w-full bg-black text-yellow-200 text-center py-5'
    },
    <>R.A.M.O.N.E.S</>
  );
}
