using System

public static class ReturnNegative
{
  public static int MakeNegative(int number)
  {
    if (number > 0) {
      return number * -1;
    }
    return number;
  }

  // Refactored:
  public static int MakeNegativeV2(int number)
  {
    return -Math.Abs(number);
  }

}