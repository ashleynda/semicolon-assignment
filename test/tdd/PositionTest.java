package tdd;

import org.junit.jupiter.api.Test;

import javax.swing.text.Position;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class PositionTest {

    @Test
    public void printPositionOfHighestNumber(){
        NumberPosition number = new NumberPosition();
        String position = String.valueOf(number.getPosition("5, 18, 32, 3. 4");
        assertArrayEquals(new String[]{"3, 2, 1, 5, 4"});
        }
    }

