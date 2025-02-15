// minuscolo

const { createApp } = Vue
createApp({
    data() {
        return {
            titolo: "Vue-BoolZapp",
            contacts: [
                {
                    id: 0,
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 1,
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id: 2,
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 3,
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 4,
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 5,
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id: 6,
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: "E'il compleanno di Maritina",
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie! le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 7,
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            userClicked: 0,
            activeContact: 0,
            userInput: "",
            searchInput: "",
            editingMessage: null,


        }
    },

    methods: {
        cliccato(contactId){
            console.log("Hai cliccato su:", contactId)
          const contactIndex = this.contacts.findIndex(contact => contact.id === contactId)
          this.userClicked = contactIndex
        },
        printMessage() {

            this.contacts[this.userClicked].messages.push({ message: this.userInput, status: "sent", date: new Date().toLocaleString('it-IT', { dateStyle: 'short' }) });
            console.log(this.userClicked)
            this.userInput = "" // Reset userInput to an empty string after sending a message
            setTimeout(() => {
                this.contacts[this.userClicked].messages.push({ message: "Ciao!", status: "received", date: new Date().toLocaleString('it-IT', { dateStyle: 'short' }) });
            }, 1000);
        },

        deleteMessage(index) {
            Swal.fire({
                title: 'Sei sicuro?',
                text: "Non potrai più recuperare questo messaggio!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sì, cancella!',
                customClass: {
                    popup: 'my-popup' // Aggiungi una classe personalizzata
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    this.contacts[this.userClicked].messages.splice(index, 1);
                    Swal.fire(
                        'Cancellato!',
                        'Il tuo messaggio è stato cancellato.',
                        'success'
                    );
                }
            });
        },
        editMessage(index) {
            this.editingMessage = index;
        },
        saveMessage(index, message) {
            this.contacts[this.userClicked].messages[index].message = message;
            this.editingMessage = null;
        },

    },

    computed: {
        filteredContacts: function () {
            return this.contacts.filter((contact) => {
                return contact.name.toLowerCase().match(this.searchInput)
            })
        }
    },





    //MOMENTI DI BASE
    mounted() {
        console.log("App montata")
    }
}).mount("#app")
