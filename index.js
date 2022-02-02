class Model {
    counter = 0

    plus() {
        return ++this.counter
    }

    minus() {
        return --this.counter
    }
}

class View {
    cloneContainer = document.getElementById('clone_container')

    render(countOfClone) {
        this.cloneContainer.innerHTML = ''
        for (let i = 0; i < countOfClone; i++) {
            const naruto = document.createElement('img')
            naruto.setAttribute('src', 'naruto.png')
            naruto.setAttribute('alt', 'Naruto')
            this.cloneContainer.appendChild(naruto)
        }
    }
}

class Controller {
    model = new Model()
    view = new View()

    listen(command) {
        switch (command) {
            case 'plus' :
                this.view.render(this.model.plus())
                break

            case 'minus' :
                this.view.render(this.model.minus())
                break
        }
    }
}

const controller = new Controller()