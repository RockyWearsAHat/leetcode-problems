// Runtime 0ms Beats 100.00%; Average for Problem, (83.33% had 0ms runtime)

public class Solution {
    public int MinTimeToVisitAllPoints(int[][] points) {
        int time = 0;

        for(int i = 0; i < points.Length - 1; i++) {
            //Instead of helper method directly implement for efficiency
            time += Math.Max(Math.Abs(points[i + 1][0] - points[i][0]), 
            Math.Abs(points[i + 1][1] - points[i][1]));
        }

        return time;
    }
    //Original implementation below, unnecessary helper as this can be pushed down to one 
    //line with a simple Math.Max which is what these if statements are doing. Inlined 
    //above for quicker performance.

    // private int NumberOfSecondsToTravelPoints(int[] point1, int[] point2) {
        // int xDistanceBetweenPoints = Math.Abs(point2[0] - point1[0]);
        // int yDistanceBetweenPoints = Math.Abs(point2[1] - point1[1]);

        // if(xDistanceBetweenPoints == yDistanceBetweenPoints) {
        //     return xDistanceBetweenPoints;
        // } else if(xDistanceBetweenPoints > yDistanceBetweenPoints) {
        //     return xDistanceBetweenPoints;
        // } else {
        //     return yDistanceBetweenPoints;
        // }
        //Original implementation, after consulting chatgpt this can be reduced to
        //return Math.Max(Math.Abs(point2[0] - point1[0]), 
        //                Math.Abs(point2[1] - point1[1]));
    // }
}