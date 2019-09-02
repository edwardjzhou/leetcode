# 122. Best Time to Buy and Sell Stock II

# Input: [7,1,5,3,6,4]
# Output: 7
# Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
#              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

def max_profit(prices)
   
   	if prices.length==1 or prices.length==0
   		return 0
   	end

   buy_at = nil
   sell_at = 0
   total_profit=0
   
   	if prices[0] <= prices[1] and prices.max > prices[0]
   		buy_at = prices[0]
   	else
   		buy_at = nil
   	end

   	i=1

   	while i < prices.length - 1

   		if  prices[i] < prices[i-1]  and (prices[i] < prices[i+1] or (prices[i] == prices[i+1] and prices[i...prices.length].max > prices[i+1])) and buy_at == nil # valley with a flat part in it like [1,0,0,1]
   			buy_at = prices[i]
   		end

   		if (prices[i] > prices[i+1] and buy_at != nil)  #peak -- sell here
   			sell_at = prices[i]
   			total_profit+= sell_at - buy_at
   			buy_at = nil	
   		end

   		i+=1
   end
   
   if buy_at != nil
   		total_profit += prices[prices.length-1] - buy_at

   end

   return total_profit

end

p max_profit([2,1,2,1,0,0,1])