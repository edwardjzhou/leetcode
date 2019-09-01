# ~90th percentile speed. Learned that the more if statements you use, the faster you get when doing array operations, probably because you don't waste time doing operations on indexes
# already eliminated as potential answers. Also generally easier to write loops for. Also quantity of loops will be lessened. Also more readable.
def max_profit(prices)
	if prices.length==nil or prices.length==0
		return 0
	end

	answer = prices.max - prices[0] #answer= highest peak ele - this valleys ele 

	peak_index = prices.index(prices.max) 
	buy_price = prices[0] 
	i=1
	while i < prices.length-1
		
		if prices[i] <= prices[i+1] and prices[i] < prices[i-1] and i < peak_index and prices[i] < buy_price # if we're in valley and still not to peak and cheaper
			answer = prices[peak_index] - prices[i] # re supra if: prices[i]<= prices[i+1] is to include flat valleys... having fake valleys is OK, not including a flat valley is not
			buy_price = prices[i]
		end

		if prices[i] <= prices[i+1] and prices[i] < prices[i-1] and i > peak_index # if we're in a valley and past old peak 
	
			peak_index=prices.index(prices[i...prices.length].max) #update peak_index
			
			if answer < prices[peak_index] - prices[i] # replace answer by a better one if need be
				answer = prices[peak_index] - prices[i]
				buy_price = prices[i]
			end

		end

		
	

		i+=1
	end
	return answer
end

p max_profit([7,1,5,3,6,4])













