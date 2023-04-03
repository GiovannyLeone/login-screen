import React, { useState } from 'react'
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import withReactContent from 'sweetalert2-react-content'


export interface CreateNetworksProps { }

const CreateNetworks: React.FunctionComponent<CreateNetworksProps> = props => {


    const [Redirect, setRedirect] = useState(Boolean)

    const [isAnimation, setAnimation] = useState(false);

    function ChangeURL(pLink: any) {
        setAnimation(true)
        setTimeout(() => {
            window.location.href = `${pLink}`
        }, 660);
    }

    const email = async () => {
        const { value: age } = await Swal.fire({
            title: 'Quantos anos você têm?',
            icon: 'question',
            input: 'range',
            inputLabel: 'Sua idade',
            inputValue: 20,
            confirmButtonText: 'Próximo',
            confirmButtonColor: '#7743CD',
            color: '#440377',
        })

        const storageJob = localStorage.getItem("dataJob");
        const storageBio = localStorage.getItem("dataBio");
        const storageInstagram = localStorage.getItem("dataInstragam");
        const storageLinkedin = localStorage.getItem("dataLinkedin");
        const storageTikTok = localStorage.getItem("dataTikTok");

        const { value: job } = await Swal.fire({
            title: 'Se defina em uma palavra',
            icon: 'question',
            input: 'text',
            inputLabel: 'Trabalha com algo? coloca sua profissão por exemplo',
            inputPlaceholder: 'Artista por exemplo',
            inputValue: storageJob!,
            confirmButtonText: 'Próximo',
            confirmButtonColor: '#7743CD',
            color: '#440377',
        })

        localStorage.setItem("dataJob", job);

        const { value: bio } = await Swal.fire({
            input: 'textarea',
            inputLabel: 'Escreva sobre você...',
            inputPlaceholder: 'Digite aqui...',
            inputAttributes: {
              'aria-label': 'Type your message here'
            },
            showCancelButton: true
          })

        localStorage.setItem("dataBio", bio);


        const { value: instragam } = await Swal.fire({
            title: 'Qual é seu @ do instagram',
            icon: 'question',
            input: 'text',
            inputLabel: 'Digite sem o @',
            inputPlaceholder: 'Digite seu @',
            inputValue: storageInstagram!,
            confirmButtonText: 'Próximo',
            confirmButtonColor: '#7743CD',
            color: '#440377',
        })

        localStorage.setItem("dataInstragam", instragam);

        const { value: tikTok } = await Swal.fire({
            title: 'Qual é seu @ do TikTok',
            icon: 'question',
            input: 'text',
            inputLabel: 'Digite sem o @',
            inputPlaceholder: 'Digite seu @',
            inputValue: storageTikTok!,
            confirmButtonText: 'Próximo',
            confirmButtonColor: '#7743CD',
            color: '#440377',
        })

        localStorage.setItem("dataTikTok", tikTok);

        const { value: linkedin } = await Swal.fire({
            title: 'Coloque o link do seu linkedin',
            icon: 'question',
            input: 'text',
            inputLabel: 'Digite a url com /',
            inputPlaceholder: 'Digite o link do seu perfil',
            inputValue: storageLinkedin!,
            confirmButtonText: 'Próximo',
            confirmButtonColor: '#7743CD',
            color: '#440377',
        })

        localStorage.setItem("dataLinkedin", linkedin);


        if (age) {
            const swalWithBootstrapButtons = Swal.mixin({
            })

            swalWithBootstrapButtons.fire({
                title: 'Seus dados estão corretos?',
                html: `        
                <style>
                .color {
                    color: #440377;
                }

                p {
                    color: #000000AB;
                }

                </style>
                <p style="text-align: left; margin: 0 50px">        
                Sua idade:  <span class="color">${age}</span> <br /><br />
                Definição:  <span class="color">${job}</span> <br /><br />
                Instragam:  <span class="color">@${instragam}</span> <br /><br />
                TikTok:     <span class="color">@${tikTok}</span> <br /><br />
                Linkedin:   <span class="color">${linkedin}</span> <br /><br />
                </p>
                `,
                icon: 'warning',
                color: '#440377',
                confirmButtonColor: '#7743CD',
                showCancelButton: true,
                confirmButtonText: 'Sim, vamos seguir',
                cancelButtonText: 'Não, vamos refazer',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    let timerInterval: string | number | NodeJS.Timer | undefined
                    Swal.fire({
                        title: 'Ótimo, aguarde, estamos construindo seu card',
                        html: 'I will close in <b></b> milliseconds.',
                        timer: 2000,
                        timerProgressBar: true,
                        color: '#440377',
                        didOpen: () => {
                            Swal.showLoading()
                            const b: any = Swal.getHtmlContainer()!.querySelector('b')
                            timerInterval = setInterval(() => {
                                b.textContent = Swal.getTimerLeft()
                            }, 100)
                        },
                        willClose: () => {
                            clearInterval(timerInterval)
                        }
                    }).then((result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                            console.log('I was closed by the timer')
                        }
                    })
                    setRedirect(true)

                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    let timerInterval: string | number | NodeJS.Timer | undefined
                    Swal.fire({
                        title: 'Ok, vamos recomeçar as perguntas',
                        html: 'I will close in <b></b> milliseconds.',
                        timer: 2000,
                        timerProgressBar: true,
                        color: '#440377',
                        didOpen: () => {
                            Swal.showLoading()
                            const b: any = Swal.getHtmlContainer()!.querySelector('b')
                            timerInterval = setInterval(() => {
                                b.textContent = Swal.getTimerLeft()
                            }, 100)
                        },
                        willClose: () => {
                            clearInterval(timerInterval)
                        }
                    }).then((result) => {
                        /* Read more about handling dismissals below */
                        if (result.dismiss === Swal.DismissReason.timer) {
                            console.log('I was closed by the timer')
                        }
                    })
                    setTimeout(() => {
                        ChangeURL("/Networks")
                    }, 1800)
                }
            })
        }

    }
    if (Redirect === true) {
        setTimeout(() => {
            ChangeURL("/Profile")
        }, 2000)
    } else {
        email()
    }




    return (
        <>


        </>
    )
}

export default CreateNetworks