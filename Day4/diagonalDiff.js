<script>
// JAVA SCRIPT Code for Find difference between sums
// of two diagonals

function difference(arr,n)
	{
	
		// Initialize sums of diagonals
		let d1 = 0, d2 = 0;
	
		for (let i = 0; i < n; i++)
		{
			d1 += arr[i][i];
			d2 += arr[i][n-i-1];
		}
	
		// Absolute difference of the sums
		// across the diagonals
		return Math.abs(d1 - d2);
	}
	
	/* Driver program  */
	
		let n = 3;		
		let arr = [[11, 2, 4],
			[4 , 5, 6],
			[10, 8, -12]];
	
		document.write(difference(arr, n));
		


</script>
