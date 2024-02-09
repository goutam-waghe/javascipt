// nulish coalescing operator 
//nulish : null , undefined ( not 0 or '')
const num = undefined;

  const guests = num || 10 ; 
  console.log(guests);

  const guestCorrect = num ?? 10 ;
  console.log(guestCorrect);
