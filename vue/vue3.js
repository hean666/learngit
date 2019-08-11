// JavaScript Document
var app3 = new Vue({
	el: '#app3',
	data:{
		list:[
			{
				id: 1,
				name:'apple',
				peice:'10',
				count:'5'
				},
				{
				id: 2,
				name:'banana',
				peice:'20',
				count:'6'
				},
				{
				id: 3,
				name:'oriange',
				peice:'30',
				count:'7'
				}
			]
		},
		computed:{
			totalPrcie:function(){
				var total =0;
				for(var i=0;i<this.list.length;i++){
					var item = this.list[i];
					total +=item.price*item.count;
					}
				return total.toString();	
				}
			},
		methods:{
			handleReduce:function(index){
				if(this.list[index].count ===1) return;
				this.list[index].count--;
				}
			},
			handleAdd:function(index){
				this.list[index].count++;
				}
			},	
		handleRemove:function(index){
				this.list.splice(index,1);
				}
			}		
	});