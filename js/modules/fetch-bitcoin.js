export default function initBitcoin() {
  const spanBitcoin = document.querySelector('.bitcoin')
  
  async function fetchBitcoin() {
    try {
      const bitcoinResponse = await fetch('https://www.blockchain.com/ticker');
      const bitcoinJSON = await bitcoinResponse.json();
      spanBitcoin.innerText = (1000 / bitcoinJSON.BRL.sell).toFixed(4)
    } catch(erro) {
      console.log(erro);
    }
  }

  fetchBitcoin()
}