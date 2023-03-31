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

        const storageInstagram = localStorage.getItem("dataInstragam");
        const storageLinkedin = localStorage.getItem("dataLinkedin");
        const storageTikTok = localStorage.getItem("dataTikTok");

        const { value: instragam } = await Swal.fire({
            title: 'Qual é o seu @ do instagram',
            icon: 'question',
            input: 'text',
            inputLabel: 'Digite sem o @',
            inputPlaceholder: 'Enter your email address',
            inputValue: storageInstagram || undefined,
            confirmButtonText: 'Próximo',
            confirmButtonColor: '#7743CD',
            color: '#440377',
        })

        localStorage.setItem("dataInstragam", instragam);


        const { value: linkedin } = await Swal.fire({
            title: 'Coloque o link do seu linkedin',
            icon: 'question',
            input: 'text',
            inputLabel: 'Digite a url com /',
            inputPlaceholder: 'Enter your email address',
            inputValue: storageLinkedin || undefined,
            confirmButtonText: 'Próximo',
            confirmButtonColor: '#7743CD',
            color: '#440377',
        })

        localStorage.setItem("dataLinkedin", linkedin);


        const { value: tikTok } = await Swal.fire({
            title: 'Coloque o link do seu TikTok',
            icon: 'question',
            input: 'text',
            inputLabel: 'Digite a url com /',
            inputPlaceholder: 'Enter your email address',
            inputValue: storageTikTok || undefined,
            confirmButtonText: 'Próximo',
            confirmButtonColor: '#7743CD',
            color: '#440377',
        })

        localStorage.setItem("dataTikTok", tikTok);


        if (age) {
            const swalWithBootstrapButtons = Swal.mixin({
            })

            swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                html: `                
                Sua idade: ${age} <br />
                Instragam:  @${instragam} <br />
                linkedin:  ${linkedin} <br />
                TikTok:  ${tikTok} <br />`,

                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                setRedirect(true)

                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        'Cancelled',
                        'Your imaginary file is safe :)',
                        'error'
                    )
                }
            })
        }

    }
    email()
    if (Redirect === true) {
        ChangeURL("/Profile")
    }




return (
    <>


    </>
)
}

export default CreateNetworks