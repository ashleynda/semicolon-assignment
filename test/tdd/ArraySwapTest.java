package tdd;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class ArraySwapTest {
    @Test
    public void swapTwoAndFourIndexTest(){
        Array swap = new Array();
        int[] array = {5, 2, 6, 10, 9, 3};
        int[] expected = {5, 2, 9, 10, 6, 3};
        assertArrayEquals(expected, swap.swapIndex(2, 4, array));
    }

    @Test
    public void checkThatTextBodyIsAnIsogram(){
        Array isogram = new Array();
        String text = "a b c d e f g h i j k l m n o p q r s t u v w x y z";

        assertTrue(isogram.checkThatTextBodyIsAnIsogram(text));

    }
    }

