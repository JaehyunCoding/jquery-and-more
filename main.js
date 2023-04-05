// Challenge 1

let clickDiv = $(`<div>Click Here</div>`)
$(`body`).append(clickDiv)

let ul = $(`<ul>`)
$(`body`).append(ul)

clickDiv.on(`click`, function(){
    let inputText = $(`#input-box`).val()

    let li = $(`<li>`).text(inputText)
    ul.append(li)
    $(`#input-box`).val(``)
})

// Challenge 2...

const config = {
    type: 'bar',
    data: {
        labels: [`Red`, `Blue`, `Yellow`, `Green`],
        data: [13,61,3,56,1,2],
        backgroundColor: [
            `red`,
            `blue`,
            `yellow`,
            `green`
        ],

        borderWidth: 1
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };