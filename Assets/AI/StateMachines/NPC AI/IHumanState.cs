public interface IHumanState
{
    void EnterState(Human animal);
    void UpdateState(Human human);
    void ExitState(Human human);
}