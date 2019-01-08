window.onload = function () {
    updateBlocks();
}

async function updateBlocks() {
    let web3 = new Web3(Web3.givenProvider);
    let latest = await web3.eth.getBlockNumber();
    // console.log(latest);

    for (var i = 0; i < 10; i++) {
        let block = await web3.eth.getBlock(latest - i);
        printBlock(block);
    }
}

function printBlock(block) {
    let tableBody = document.getElementById('blocks').getElementsByTagName('tbody')[0];

    let row             = tableBody.insertRow(-1);
    let numberCell      = row.insertCell(0);
    let hashCell        = row.insertCell(1);
    let timestampCell   = row.insertCell(2);

    numberCell.innerHTML = block.number;
    hashCell.innerHTML = block.hash;
    timestampCell.innerHTML = block.timestamp;
}
