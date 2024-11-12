function first() {
  return new Promise((res) => {
    res("JavaScript");
  })
}

function second() {
  return new Promise((res) => {
    res("Rust");
  })
}

// async function resolve_all_seq() {
//   const res1 = await first();
//   const res2 = await second();
//   console.log(res1);
//   console.log(res2);
// }

// resolve_all_seq();

async function resolve_all_nonseq() {
  const [res1, res2] = await Promise.all([first(), second()])
  
  console.log(res2);
  console.log(res1);
}

resolve_all_nonseq();
