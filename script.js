var dice_button = document.getElementById('dice_button')
var dice_number = document.getElementById('dice_number')
var player_name = document.getElementById('player_name')
var alerts = document.getElementById('alerts')

var snake_array = [14,19,29,35]
var snake_final_pos = [3,5,13,1]
var ladder_array = [2,8,21,25]
var ladder_final_pos = [17,22,32,31]

var player1_coin = document.createElement('div')
player1_coin.setAttribute('id','player_coin1')
player1_coin.innerText = 'P1'

var player2_coin = document.createElement('div')
player2_coin.setAttribute('id','player_coin2')
player2_coin.innerText = 'P2'

var current_player = true
var player_counter = [0,0,0]

window.addEventListener('load',start)

function start(){
    dice_button.addEventListener('click', dice_rolled)
}

function dice_rolled(){
    dice_number.innerText = random()
    append_element(player_picker())
}

function random(){
    var random_number = Math.ceil(Math.random()*10)
    if(random_number > 6){
        random_number = 11 - random_number
    }
    return random_number
}

function player_picker(){
    if(current_player){
        current_player = false
        player_name.innerHTML = 'Player 2'
        return 1
        
    }
    else{
        current_player = true
        player_name.innerText = 'Player 1'
        return 2
        
    }
}

function id_creator(num){
    var string = "box_"
    string = string + num
    return string
}

function coin_id_creator(num){
    var string = "player_coin"
    string = string + num
    return string
}

function counter(player){
    if((player_counter[player]+Number(dice_number.innerText))>36){
        /* do nothing */
    }
    else{
        player_counter[player] = player_counter[player] + Number(dice_number.innerText)
    }
}

function append_element(player){
    counter(player)
    console.log(player_counter[player])
    var player_next_position = document.getElementById(id_creator(player_counter[player]))
    if(player == 1){
        player_next_position.append(player1_coin)
    }
    else{
        player_next_position.append(player2_coin)
    }
    snake_or_ladder(player_counter[player],player)
}

function snake_or_ladder(counter , player){
    for(i=0; i<snake_array.length; i++){
        if(counter == snake_array[i]){
            player_counter[player] = snake_final_pos[i]
            after_snake_or_ladder(player)
            alerts.innerText = 'Player '+player.toString()+' got snake to: '+ snake_final_pos[i].toString() 
        }
    }
    for(j=0; j<ladder_array.length; j++){
        if(counter == ladder_array[j]){
            player_counter[player] = ladder_final_pos[j]
            after_snake_or_ladder(player)
            alerts.innerText = 'Player '+player.toString()+' got ladder to: '+ ladder_final_pos[j].toString()
        }
    }
    if(counter == 36){
        alert('player '+player.toString()+' won the game')
    }
    
}

function after_snake_or_ladder(player){
    var player_next_position = document.getElementById(id_creator(player_counter[player]))
    if(player == 1){
        player_next_position.append(player1_coin)
    }
    else{
        player_next_position.append(player2_coin)
    }
    
}









