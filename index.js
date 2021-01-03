const modal = $.modal({
    title: 'Developer',
    closable: true,
    content: `
    <p>Lorem ipsum dolor sit.</p>
    <p>Lorem ipsum dolor sit.</p>
    `,
    width: '400px',
    footerButtons: [{
            text: 'Ok',
            type: 'primary',
            handler() {
                console.log('Primary btn clicked')
                modal.close()
            }
        },
        {
            text: 'Cancel',
            type: 'danger',
            handler() {
                console.log('Danger btn clicked')
                modal.close()
            }
        }
    ]
})

document.addEventListener('click', event => {
    event.preventDefault()
    const btnType = event.target.dataset.btn
    if (btnType === 'product') {
        modal.open()
    } else if (btnType === 'remoove') {
        confirmModal.open()
    }
})



const confirmModal = $.modal({
    title: 'Продукт-1',
    closable: true,
    content: `
    <p>Вы действительно хотите удалить продукт?</p>
    `,
    width: '400px',
    footerButtons: [
        {
            text: 'Отменить',
            type: 'secondary',
            handler() {
                confirmModal.close()
            }
        },
        {
            text: 'Удалить',
            type: 'danger',
            handler() {
                confirmModal.close()
            }
        }
    ]
})

