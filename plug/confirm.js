// const confirmModal = $.modal({
//     title: 'Продукт-1',
//     closable: true,
//     content: `
//     <p>Вы действительно хотите удалить продукт?</p>
//     `,
//     width: '400px',
//     footerButtons: [
//         {
//             text: 'Отменить',
//             type: 'secondary',
//             handler() {
//                 confirmModal.close()
//             }
//         },
//         {
//             text: 'Удалить',
//             type: 'danger',
//             handler() {
//                 confirmModal.close()
//             }
//         }
//     ]
// })


$.confirm = function (options) {
    return new Promise((resolve, reject) => {
        const modal = $.modal({
            title: 'Продукт-1',
            closable: false,
            content: `
    <p>Вы действительно хотите удалить продукт?</p>
    `,
            width: '400px',
            footerButtons: [{
                    text: 'Отменить',
                    type: 'secondary',
                    handler() {
                        modal.close()
                        reject()
                    }
                },
                {
                    text: 'Удалить',
                    type: 'danger',
                    handler() {
                        modal.close()
                        resolve()
                    }
                }
            ]
        })
        modal.open()
    })
}